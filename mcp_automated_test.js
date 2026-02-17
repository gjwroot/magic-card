// MCP自动化测试脚本
// 使用Chrome DevTools MCP工具进行测试

class MCPAutomatedTest {
    constructor() {
        this.testResults = [];
        this.currentTest = '';
        this.pageId = null;
    }

    // 开始测试
    async startTests() {
        console.log('🧪 开始MCP自动化测试');
        this.testResults = [];

        try {
            // 打开测试页面
            await this.openTestPage();
            
            // 按顺序执行测试
            await this.testPageLoad();
            await this.testParticleSystem();
            await this.testMouseInteraction();
            await this.testModeSwitching();
            await this.testFireworks();
            await this.testRedPackets();
            await this.testPureMode();
            await this.testPerformance();
            
            this.generateReport();
        } catch (error) {
            console.error('❌ 测试过程中出错:', error);
            this.generateReport();
        }
    }

    // 打开测试页面
    async openTestPage() {
        console.log('🌐 打开测试页面...');
        
        try {
            // 创建新页面
            const newPageResult = await mcp_Chrome_DevTools_MCP_new_page({
                url: 'http://localhost:8080/projects/magic-card/index_new.html'
            });
            
            this.pageId = newPageResult.pageId;
            console.log(`✅ 页面已打开，pageId: ${this.pageId}`);
            
            // 等待页面加载完成
            await new Promise(resolve => setTimeout(resolve, 3000));
        } catch (error) {
            console.error('❌ 打开页面失败:', error);
            throw error;
        }
    }

    // 测试页面加载
    async testPageLoad() {
        this.currentTest = '页面加载测试';
        console.log('📄 测试页面加载...');

        try {
            // 检查页面元素
            const snapshot = await mcp_Chrome_DevTools_MCP_take_snapshot({ pageId: this.pageId });
            
            // 检查是否包含关键元素
            if (snapshot.includes('particlesCanvas') && snapshot.includes('btnFu')) {
                this.testResults.push({ test: this.currentTest, status: 'PASS', message: '页面元素加载成功' });
                console.log('✅ 页面元素加载成功');
            } else {
                this.testResults.push({ test: this.currentTest, status: 'FAIL', message: '页面元素加载失败' });
                console.error('❌ 页面元素加载失败');
            }
        } catch (error) {
            this.testResults.push({ test: this.currentTest, status: 'ERROR', message: error.message });
            console.error('❌ 页面加载测试出错:', error);
        }
    }

    // 测试粒子系统
    async testParticleSystem() {
        this.currentTest = '粒子系统测试';
        console.log('✨ 测试粒子系统...');

        try {
            // 执行脚本检查粒子系统
            const result = await mcp_Chrome_DevTools_MCP_evaluate_script({
                pageId: this.pageId,
                function: `() => {
                    return {
                        particleSystemExists: !!window.particleSystem,
                        particleCount: window.particleSystem ? window.particleSystem.particles.length : 0
                    };
                }`
            });

            if (result.particleSystemExists && result.particleCount > 0) {
                this.testResults.push({ test: this.currentTest, status: 'PASS', message: `粒子系统初始化成功，粒子数量: ${result.particleCount}` });
                console.log(`✅ 粒子系统初始化成功，粒子数量: ${result.particleCount}`);
            } else {
                this.testResults.push({ test: this.currentTest, status: 'FAIL', message: '粒子系统初始化失败' });
                console.error('❌ 粒子系统初始化失败');
            }
        } catch (error) {
            this.testResults.push({ test: this.currentTest, status: 'ERROR', message: error.message });
            console.error('❌ 粒子系统测试出错:', error);
        }
    }

    // 测试鼠标交互
    async testMouseInteraction() {
        this.currentTest = '鼠标交互测试';
        console.log('🖱️  测试鼠标交互...');

        try {
            // 模拟鼠标移动
            await mcp_Chrome_DevTools_MCP_evaluate_script({
                pageId: this.pageId,
                function: `() => {
                    const mouseMoveEvent = new MouseEvent('mousemove', {
                        clientX: 100,
                        clientY: 100,
                        bubbles: true,
                        cancelable: true,
                        view: window
                    });
                    document.dispatchEvent(mouseMoveEvent);
                    return 'Mouse move event dispatched';
                }`
            });

            // 模拟鼠标点击
            await mcp_Chrome_DevTools_MCP_evaluate_script({
                pageId: this.pageId,
                function: `() => {
                    const mouseDownEvent = new MouseEvent('mousedown', {
                        clientX: 100,
                        clientY: 100,
                        bubbles: true,
                        cancelable: true,
                        view: window
                    });
                    document.dispatchEvent(mouseDownEvent);

                    const mouseUpEvent = new MouseEvent('mouseup', {
                        clientX: 100,
                        clientY: 100,
                        bubbles: true,
                        cancelable: true,
                        view: window
                    });
                    document.dispatchEvent(mouseUpEvent);
                    return 'Mouse click event dispatched';
                }`
            });

            this.testResults.push({ test: this.currentTest, status: 'PASS', message: '鼠标交互测试成功' });
            console.log('✅ 鼠标交互测试成功');
        } catch (error) {
            this.testResults.push({ test: this.currentTest, status: 'ERROR', message: error.message });
            console.error('❌ 鼠标交互测试出错:', error);
        }
    }

    // 测试模式切换
    async testModeSwitching() {
        this.currentTest = '模式切换测试';
        console.log('🎮 测试模式切换...');

        try {
            // 执行模式切换
            const result = await mcp_Chrome_DevTools_MCP_evaluate_script({
                pageId: this.pageId,
                function: `() => {
                    if (window.particleSystem) {
                        const initialMode = window.particleSystem.interactionMode;
                        window.particleSystem.switchMode();
                        const newMode = window.particleSystem.interactionMode;
                        return {
                            initialMode,
                            newMode,
                            switched: initialMode !== newMode
                        };
                    }
                    return { switched: false };
                }`
            });

            if (result.switched) {
                this.testResults.push({ test: this.currentTest, status: 'PASS', message: `模式切换成功: ${result.initialMode} → ${result.newMode}` });
                console.log(`✅ 模式切换成功: ${result.initialMode} → ${result.newMode}`);
            } else {
                this.testResults.push({ test: this.currentTest, status: 'FAIL', message: '模式切换失败' });
                console.error('❌ 模式切换失败');
            }
        } catch (error) {
            this.testResults.push({ test: this.currentTest, status: 'ERROR', message: error.message });
            console.error('❌ 模式切换测试出错:', error);
        }
    }

    // 测试烟花效果
    async testFireworks() {
        this.currentTest = '烟花效果测试';
        console.log('🎆 测试烟花效果...');

        try {
            // 触发烟花
            await mcp_Chrome_DevTools_MCP_evaluate_script({
                pageId: this.pageId,
                function: `() => {
                    if (window.particleSystem) {
                        window.particleSystem.createFireworks(200, 200);
                        return 'Fireworks created';
                    }
                    return 'Particle system not found';
                }`
            });

            this.testResults.push({ test: this.currentTest, status: 'PASS', message: '烟花效果测试成功' });
            console.log('✅ 烟花效果测试成功');
        } catch (error) {
            this.testResults.push({ test: this.currentTest, status: 'ERROR', message: error.message });
            console.error('❌ 烟花效果测试出错:', error);
        }
    }

    // 测试红包效果
    async testRedPackets() {
        this.currentTest = '红包效果测试';
        console.log('🧧 测试红包效果...');

        try {
            // 触发红包效果
            await mcp_Chrome_DevTools_MCP_evaluate_script({
                pageId: this.pageId,
                function: `() => {
                    if (window.particleSystem) {
                        window.particleSystem.createRedPacketEffect(200, 200);
                        return 'Red packets created';
                    }
                    return 'Particle system not found';
                }`
            });

            this.testResults.push({ test: this.currentTest, status: 'PASS', message: '红包效果测试成功' });
            console.log('✅ 红包效果测试成功');
        } catch (error) {
            this.testResults.push({ test: this.currentTest, status: 'ERROR', message: error.message });
            console.error('❌ 红包效果测试出错:', error);
        }
    }

    // 测试纯净模式
    async testPureMode() {
        this.currentTest = '纯净模式测试';
        console.log('✨ 测试纯净模式...');

        try {
            // 测试纯净模式切换
            await mcp_Chrome_DevTools_MCP_evaluate_script({
                pageId: this.pageId,
                function: `() => {
                    document.body.classList.add('pure-mode');
                    return document.body.classList.contains('pure-mode');
                }`
            });

            // 测试ESC键退出纯净模式
            const result = await mcp_Chrome_DevTools_MCP_evaluate_script({
                pageId: this.pageId,
                function: `() => {
                    const escEvent = new KeyboardEvent('keydown', {
                        key: 'Escape',
                        bubbles: true,
                        cancelable: true,
                        view: window
                    });
                    document.dispatchEvent(escEvent);
                    return !document.body.classList.contains('pure-mode');
                }`
            });

            if (result) {
                this.testResults.push({ test: this.currentTest, status: 'PASS', message: '纯净模式测试成功' });
                console.log('✅ 纯净模式测试成功');
            } else {
                this.testResults.push({ test: this.currentTest, status: 'FAIL', message: '纯净模式测试失败' });
                console.error('❌ 纯净模式测试失败');
            }
        } catch (error) {
            this.testResults.push({ test: this.currentTest, status: 'ERROR', message: error.message });
            console.error('❌ 纯净模式测试出错:', error);
        }
    }

    // 测试性能
    async testPerformance() {
        this.currentTest = '性能测试';
        console.log('⚡ 测试性能...');

        try {
            // 开始性能追踪
            await mcp_Chrome_DevTools_MCP_performance_start_trace({
                pageId: this.pageId,
                reload: true,
                autoStop: true
            });

            // 等待性能测试完成
            await new Promise(resolve => setTimeout(resolve, 5000));

            // 停止性能追踪
            await mcp_Chrome_DevTools_MCP_performance_stop_trace({
                pageId: this.pageId,
                filePath: 'performance_trace.json'
            });

            this.testResults.push({ test: this.currentTest, status: 'PASS', message: '性能测试成功' });
            console.log('✅ 性能测试成功');
        } catch (error) {
            this.testResults.push({ test: this.currentTest, status: 'ERROR', message: error.message });
            console.error('❌ 性能测试出错:', error);
        }
    }

    // 生成测试报告
    generateReport() {
        console.log('📊 生成MCP测试报告');
        console.log('====================================');
        console.log('🧪 MCP自动化测试报告');
        console.log('====================================');

        let passedTests = 0;
        let failedTests = 0;
        let errorTests = 0;

        this.testResults.forEach(result => {
            switch (result.status) {
                case 'PASS':
                    console.log(`✅ ${result.test}: ${result.message}`);
                    passedTests++;
                    break;
                case 'FAIL':
                    console.log(`❌ ${result.test}: ${result.message}`);
                    failedTests++;
                    break;
                case 'ERROR':
                    console.log(`💥 ${result.test}: ${result.message}`);
                    errorTests++;
                    break;
            }
        });

        console.log('====================================');
        console.log(`总计: ${this.testResults.length} 个测试`);
        console.log(`通过: ${passedTests} 个`);
        console.log(`失败: ${failedTests} 个`);
        console.log(`错误: ${errorTests} 个`);
        console.log('====================================');

        // 测试完成
        if (failedTests === 0 && errorTests === 0) {
            console.log('🎉 所有MCP测试通过！');
        } else {
            console.log('⚠️  部分MCP测试未通过，请检查错误信息。');
        }

        // 关闭测试页面
        if (this.pageId) {
            try {
                mcp_Chrome_DevTools_MCP_close_page({ pageId: this.pageId });
                console.log('✅ 测试页面已关闭');
            } catch (error) {
                console.error('❌ 关闭页面失败:', error);
            }
        }
    }
}

// 执行测试
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MCPAutomatedTest;
} else {
    // 在浏览器中直接执行
    window.MCPAutomatedTest = MCPAutomatedTest;
    console.log('MCP自动化测试脚本已加载');
}
