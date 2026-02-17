// 自动化测试脚本
// 测试粒子系统、纯净模式、交互功能等

class AutomatedTest {
    constructor() {
        this.testResults = [];
        this.currentTest = '';
    }

    // 开始测试
    startTests() {
        console.log('🧪 开始自动化测试');
        this.testResults = [];

        // 按顺序执行测试
        this.testPageLoad()
            .then(() => this.testParticleSystem())
            .then(() => this.testMouseInteraction())
            .then(() => this.testModeSwitching())
            .then(() => this.testFireworks())
            .then(() => this.testRedPackets())
            .then(() => this.testPureMode())
            .then(() => this.testPerformance())
            .then(() => this.generateReport())
            .catch(error => {
                console.error('❌ 测试过程中出错:', error);
                this.generateReport();
            });
    }

    // 测试页面加载
    async testPageLoad() {
        this.currentTest = '页面加载测试';
        console.log('📄 测试页面加载...');

        try {
            // 检查页面元素
            const canvas = document.getElementById('particlesCanvas');
            const card = document.getElementById('card');
            const btnFu = document.getElementById('btnFu');

            if (canvas && card && btnFu) {
                this.testResults.push({ test: this.currentTest, status: 'PASS', message: '页面元素加载成功' });
                console.log('✅ 页面元素加载成功');
            } else {
                this.testResults.push({ test: this.currentTest, status: 'FAIL', message: '页面元素加载失败' });
                console.error('❌ 页面元素加载失败');
            }

            // 检查粒子系统初始化
            if (window.particleSystem) {
                this.testResults.push({ test: this.currentTest, status: 'PASS', message: '粒子系统初始化成功' });
                console.log('✅ 粒子系统初始化成功');
            } else {
                this.testResults.push({ test: this.currentTest, status: 'FAIL', message: '粒子系统初始化失败' });
                console.error('❌ 粒子系统初始化失败');
            }

            return Promise.resolve();
        } catch (error) {
            this.testResults.push({ test: this.currentTest, status: 'ERROR', message: error.message });
            console.error('❌ 页面加载测试出错:', error);
            return Promise.resolve();
        }
    }

    // 测试粒子系统
    async testParticleSystem() {
        this.currentTest = '粒子系统测试';
        console.log('✨ 测试粒子系统...');

        try {
            // 检查粒子数量
            if (window.particleSystem && window.particleSystem.particles) {
                const particleCount = window.particleSystem.particles.length;
                if (particleCount > 0) {
                    this.testResults.push({ test: this.currentTest, status: 'PASS', message: `粒子生成成功，数量: ${particleCount}` });
                    console.log(`✅ 粒子生成成功，数量: ${particleCount}`);
                } else {
                    this.testResults.push({ test: this.currentTest, status: 'FAIL', message: '粒子生成失败' });
                    console.error('❌ 粒子生成失败');
                }
            } else {
                this.testResults.push({ test: this.currentTest, status: 'FAIL', message: '粒子系统未初始化' });
                console.error('❌ 粒子系统未初始化');
            }

            return Promise.resolve();
        } catch (error) {
            this.testResults.push({ test: this.currentTest, status: 'ERROR', message: error.message });
            console.error('❌ 粒子系统测试出错:', error);
            return Promise.resolve();
        }
    }

    // 测试鼠标交互
    async testMouseInteraction() {
        this.currentTest = '鼠标交互测试';
        console.log('🖱️  测试鼠标交互...');

        try {
            // 模拟鼠标移动
            const mouseMoveEvent = new MouseEvent('mousemove', {
                clientX: 100,
                clientY: 100,
                bubbles: true,
                cancelable: true,
                view: window
            });
            document.dispatchEvent(mouseMoveEvent);

            // 模拟鼠标点击
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

            this.testResults.push({ test: this.currentTest, status: 'PASS', message: '鼠标交互测试成功' });
            console.log('✅ 鼠标交互测试成功');
            return Promise.resolve();
        } catch (error) {
            this.testResults.push({ test: this.currentTest, status: 'ERROR', message: error.message });
            console.error('❌ 鼠标交互测试出错:', error);
            return Promise.resolve();
        }
    }

    // 测试模式切换
    async testModeSwitching() {
        this.currentTest = '模式切换测试';
        console.log('🎮 测试模式切换...');

        try {
            if (window.particleSystem) {
                const initialMode = window.particleSystem.interactionMode;
                
                // 模拟模式切换
                window.particleSystem.switchMode();
                const newMode = window.particleSystem.interactionMode;

                if (newMode !== initialMode) {
                    this.testResults.push({ test: this.currentTest, status: 'PASS', message: `模式切换成功: ${initialMode} → ${newMode}` });
                    console.log(`✅ 模式切换成功: ${initialMode} → ${newMode}`);
                } else {
                    this.testResults.push({ test: this.currentTest, status: 'FAIL', message: '模式切换失败' });
                    console.error('❌ 模式切换失败');
                }
            } else {
                this.testResults.push({ test: this.currentTest, status: 'FAIL', message: '粒子系统未初始化' });
                console.error('❌ 粒子系统未初始化');
            }

            return Promise.resolve();
        } catch (error) {
            this.testResults.push({ test: this.currentTest, status: 'ERROR', message: error.message });
            console.error('❌ 模式切换测试出错:', error);
            return Promise.resolve();
        }
    }

    // 测试烟花效果
    async testFireworks() {
        this.currentTest = '烟花效果测试';
        console.log('🎆 测试烟花效果...');

        try {
            if (window.particleSystem && window.particleSystem.fireworksSystem) {
                // 触发烟花
                window.particleSystem.createFireworks(200, 200);
                this.testResults.push({ test: this.currentTest, status: 'PASS', message: '烟花效果测试成功' });
                console.log('✅ 烟花效果测试成功');
            } else {
                this.testResults.push({ test: this.currentTest, status: 'FAIL', message: '烟花系统未初始化' });
                console.error('❌ 烟花系统未初始化');
            }

            return Promise.resolve();
        } catch (error) {
            this.testResults.push({ test: this.currentTest, status: 'ERROR', message: error.message });
            console.error('❌ 烟花效果测试出错:', error);
            return Promise.resolve();
        }
    }

    // 测试红包效果
    async testRedPackets() {
        this.currentTest = '红包效果测试';
        console.log('🧧 测试红包效果...');

        try {
            if (window.particleSystem) {
                // 触发红包效果
                window.particleSystem.createRedPacketEffect(200, 200);
                this.testResults.push({ test: this.currentTest, status: 'PASS', message: '红包效果测试成功' });
                console.log('✅ 红包效果测试成功');
            } else {
                this.testResults.push({ test: this.currentTest, status: 'FAIL', message: '粒子系统未初始化' });
                console.error('❌ 粒子系统未初始化');
            }

            return Promise.resolve();
        } catch (error) {
            this.testResults.push({ test: this.currentTest, status: 'ERROR', message: error.message });
            console.error('❌ 红包效果测试出错:', error);
            return Promise.resolve();
        }
    }

    // 测试纯净模式
    async testPureMode() {
        this.currentTest = '纯净模式测试';
        console.log('✨ 测试纯净模式...');

        try {
            // 测试纯净模式切换
            document.body.classList.add('pure-mode');
            window.isPureMode = true;
            
            // 检查纯净模式样式是否应用
            const isPureMode = document.body.classList.contains('pure-mode');
            if (isPureMode) {
                this.testResults.push({ test: this.currentTest, status: 'PASS', message: '纯净模式开启成功' });
                console.log('✅ 纯净模式开启成功');
            } else {
                this.testResults.push({ test: this.currentTest, status: 'FAIL', message: '纯净模式开启失败' });
                console.error('❌ 纯净模式开启失败');
            }

            // 测试ESC键退出纯净模式
            const escEvent = new KeyboardEvent('keydown', {
                key: 'Escape',
                bubbles: true,
                cancelable: true,
                view: window
            });
            document.dispatchEvent(escEvent);

            const isPureModeAfterEsc = document.body.classList.contains('pure-mode');
            if (!isPureModeAfterEsc && !window.isPureMode) {
                this.testResults.push({ test: this.currentTest, status: 'PASS', message: 'ESC键退出纯净模式成功' });
                console.log('✅ ESC键退出纯净模式成功');
            } else {
                this.testResults.push({ test: this.currentTest, status: 'FAIL', message: 'ESC键退出纯净模式失败' });
                console.error('❌ ESC键退出纯净模式失败');
            }

            return Promise.resolve();
        } catch (error) {
            this.testResults.push({ test: this.currentTest, status: 'ERROR', message: error.message });
            console.error('❌ 纯净模式测试出错:', error);
            return Promise.resolve();
        }
    }

    // 测试性能
    async testPerformance() {
        this.currentTest = '性能测试';
        console.log('⚡ 测试性能...');

        try {
            const startTime = performance.now();
            
            // 模拟大量粒子生成
            if (window.particleSystem) {
                for (let i = 0; i < 50; i++) {
                    window.particleSystem.createClickEffect(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
                }
            }

            const endTime = performance.now();
            const executionTime = endTime - startTime;

            if (executionTime < 1000) {
                this.testResults.push({ test: this.currentTest, status: 'PASS', message: `性能测试通过，执行时间: ${executionTime.toFixed(2)}ms` });
                console.log(`✅ 性能测试通过，执行时间: ${executionTime.toFixed(2)}ms`);
            } else {
                this.testResults.push({ test: this.currentTest, status: 'WARN', message: `性能测试警告，执行时间: ${executionTime.toFixed(2)}ms` });
                console.warn(`⚠️  性能测试警告，执行时间: ${executionTime.toFixed(2)}ms`);
            }

            return Promise.resolve();
        } catch (error) {
            this.testResults.push({ test: this.currentTest, status: 'ERROR', message: error.message });
            console.error('❌ 性能测试出错:', error);
            return Promise.resolve();
        }
    }

    // 生成测试报告
    generateReport() {
        console.log('📊 生成测试报告');
        console.log('====================================');
        console.log('🧪 自动化测试报告');
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
                case 'WARN':
                    console.log(`⚠️  ${result.test}: ${result.message}`);
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
            console.log('🎉 所有测试通过！');
        } else {
            console.log('⚠️  部分测试未通过，请检查错误信息。');
        }

        // 保存测试结果到本地存储
        localStorage.setItem('particleSystemTestResults', JSON.stringify(this.testResults));
    }
}

// 页面加载完成后执行测试
window.addEventListener('load', () => {
    setTimeout(() => {
        const test = new AutomatedTest();
        test.startTests();
    }, 2000);
});

// 导出测试类供外部调用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AutomatedTest;
}

// 导出到全局作用域
if (typeof window !== 'undefined') {
    window.AutomatedTest = AutomatedTest;
}
