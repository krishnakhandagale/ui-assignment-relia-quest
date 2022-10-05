export const debounce = (fn: Function, delay: number) =>{
    let timeoutId: any = null;
    return (...args: unknown[]) =>{
        const context = this;
        timeoutId && clearTimeout(timeoutId);
        timeoutId =  setTimeout(()=>{
            fn.apply(context, args);
        }, delay);
    }
}