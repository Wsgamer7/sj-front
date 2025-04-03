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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ModelsIDListRequest
 */
export interface ModelsIDListRequest {
    /**
     * 
     * @type {Array<number>}
     * @memberof ModelsIDListRequest
     */
    idList?: Array<number>;
}

/**
 * Check if a given object implements the ModelsIDListRequest interface.
 */
export function instanceOfModelsIDListRequest(value: object): value is ModelsIDListRequest {
    return true;
}

export function ModelsIDListRequestFromJSON(json: any): ModelsIDListRequest {
    return ModelsIDListRequestFromJSONTyped(json, false);
}

export function ModelsIDListRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsIDListRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'idList': json['idList'] == null ? undefined : json['idList'],
    };
}

  export function ModelsIDListRequestToJSON(json: any): ModelsIDListRequest {
      return ModelsIDListRequestToJSONTyped(json, false);
  }

  export function ModelsIDListRequestToJSONTyped(value?: ModelsIDListRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'idList': value['idList'],
    };
}

