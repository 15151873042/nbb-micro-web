// 当前子应用名称
const appName = import.meta.env.VITE_APP_NAME

// 主应用的通知类型
export enum NotifyType {
    route_change = "route_change", // 路由跳转
    other = "other" // 其他
}

/**
 * 检测是否在微前端环境中运行
 */
export const isMicroEnvironment = (): boolean => {
    return (window as any).__MICRO_APP_ENVIRONMENT__ === true;
}

// 向主应用发送数据
export const notifyMainApp = (notifyType: NotifyType, data: any) => {
    if (isMicroEnvironment()) {
        window.dispatchEvent(new CustomEvent('child-data', {
            detail: {
                notifyType,
                subAppName: appName,
                data
            }
        }))
    }
}
