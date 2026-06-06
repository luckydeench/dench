import type { DenchCreateBuilder, DenchGetBuilder } from "./denchBuilder"

/**
 *  HTTP 요청 빌더 인터페이스
 * 
 *  @interface DenchInterface
 *  @function get - GET 요청을 위한 빌더 반환
 *  @function post - POST 요청을 위한 빌더 반환
 *  @function put - PUT 요청을 위한 빌더 반환
 *  @function delete - DELETE 요청을 위한 빌더 반환
 */
export interface DenchInterface{
    baseURL : string,
    get : <T>(api:string) => DenchGetBuilder<T>
    post : <T>(api: string, data : any) => DenchCreateBuilder<T>
    put : <T>(api: string, data : any) => DenchCreateBuilder<T>
    delete : <T>(api: string) => DenchGetBuilder<T>
}


// url 타입을 http:// 또는 https://로 제한하는 게 가능하다.
export type DenchURL = `http://${string}` | `https://${string}`