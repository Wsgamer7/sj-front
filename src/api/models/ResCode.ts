/* tslint:disable */
/* eslint-disable */
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const ResCode = {
    SuccessCode: 0,
    ValidateErrorCode: 7
} as const;
export type ResCode = typeof ResCode[keyof typeof ResCode];


export function instanceOfResCode(value: any): boolean {
    for (const key in ResCode) {
        if (Object.prototype.hasOwnProperty.call(ResCode, key)) {
            if (ResCode[key as keyof typeof ResCode] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ResCodeFromJSON(json: any): ResCode {
    return ResCodeFromJSONTyped(json, false);
}

export function ResCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResCode {
    return json as ResCode;
}

export function ResCodeToJSON(value?: ResCode | null): any {
    return value as any;
}

export function ResCodeToJSONTyped(value: any, ignoreDiscriminator: boolean): ResCode {
    return value as ResCode;
}

