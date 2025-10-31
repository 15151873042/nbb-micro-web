/**
 * 检测是否在微前端环境中运行
 */
export const isMicroEnvironment = (): boolean => {
    return (window as any).__MICRO_APP_ENVIRONMENT__ === true;
}
