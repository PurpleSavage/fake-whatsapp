export type Id=`${string}-${string}-${string}-${string}-${string}`
export interface messageI{
    id?:Id,
    content:string
    state:booblean
    hour:string
    messageOption?:JSX.Element
}