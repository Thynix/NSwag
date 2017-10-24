﻿//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v11.11.0.0 (NJsonSchema v9.9.10.0 (Newtonsoft.Json v9.0.0.0)) (http://NJsonSchema.org)
// </auto-generated>
//----------------------


export class Product implements IProduct {
    /** Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles. */
    product_id: string | undefined;
    /** Description of product. */
    description: string | undefined;
    /** Display name of product. */
    display_name: string | undefined;
    /** Capacity of product. For example, 4 people. */
    capacity: string | undefined;
    /** Image URL representing the product. */
    image: string | undefined;

    constructor(data?: IProduct) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.product_id = data["product_id"];
            this.description = data["description"];
            this.display_name = data["display_name"];
            this.capacity = data["capacity"];
            this.image = data["image"];
        }
    }

    static fromJS(data: any): Product {
        let result = new Product();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["product_id"] = this.product_id;
        data["description"] = this.description;
        data["display_name"] = this.display_name;
        data["capacity"] = this.capacity;
        data["image"] = this.image;
        return data; 
    }
}

export interface IProduct {
    /** Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles. */
    product_id: string | undefined;
    /** Description of product. */
    description: string | undefined;
    /** Display name of product. */
    display_name: string | undefined;
    /** Capacity of product. For example, 4 people. */
    capacity: string | undefined;
    /** Image URL representing the product. */
    image: string | undefined;
}

export class PriceEstimate implements IPriceEstimate {
    /** Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles */
    product_id: string | undefined;
    /** [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code. */
    currency_code: string | undefined;
    /** Display name of product. */
    display_name: string | undefined;
    /** Formatted string of estimate in local currency of the start location. Estimate could be a range, a single number (flat rate) or "Metered" for TAXI. */
    estimate: string | undefined;
    /** Lower bound of the estimated price. */
    low_estimate: number | undefined;
    /** Upper bound of the estimated price. */
    high_estimate: number | undefined;
    /** Expected surge multiplier. Surge is active if surge_multiplier is greater than 1. Price estimate already factors in the surge multiplier. */
    surge_multiplier: number | undefined;

    constructor(data?: IPriceEstimate) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.product_id = data["product_id"];
            this.currency_code = data["currency_code"];
            this.display_name = data["display_name"];
            this.estimate = data["estimate"];
            this.low_estimate = data["low_estimate"];
            this.high_estimate = data["high_estimate"];
            this.surge_multiplier = data["surge_multiplier"];
        }
    }

    static fromJS(data: any): PriceEstimate {
        let result = new PriceEstimate();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["product_id"] = this.product_id;
        data["currency_code"] = this.currency_code;
        data["display_name"] = this.display_name;
        data["estimate"] = this.estimate;
        data["low_estimate"] = this.low_estimate;
        data["high_estimate"] = this.high_estimate;
        data["surge_multiplier"] = this.surge_multiplier;
        return data; 
    }
}

export interface IPriceEstimate {
    /** Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles */
    product_id: string | undefined;
    /** [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code. */
    currency_code: string | undefined;
    /** Display name of product. */
    display_name: string | undefined;
    /** Formatted string of estimate in local currency of the start location. Estimate could be a range, a single number (flat rate) or "Metered" for TAXI. */
    estimate: string | undefined;
    /** Lower bound of the estimated price. */
    low_estimate: number | undefined;
    /** Upper bound of the estimated price. */
    high_estimate: number | undefined;
    /** Expected surge multiplier. Surge is active if surge_multiplier is greater than 1. Price estimate already factors in the surge multiplier. */
    surge_multiplier: number | undefined;
}

export class Profile implements IProfile {
    /** First name of the Uber user. */
    first_name: string | undefined;
    /** Last name of the Uber user. */
    last_name: string | undefined;
    /** Email address of the Uber user */
    email: string | undefined;
    /** Image URL of the Uber user. */
    picture: string | undefined;
    /** Promo code of the Uber user. */
    promo_code: string | undefined;

    constructor(data?: IProfile) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.first_name = data["first_name"];
            this.last_name = data["last_name"];
            this.email = data["email"];
            this.picture = data["picture"];
            this.promo_code = data["promo_code"];
        }
    }

    static fromJS(data: any): Profile {
        let result = new Profile();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["first_name"] = this.first_name;
        data["last_name"] = this.last_name;
        data["email"] = this.email;
        data["picture"] = this.picture;
        data["promo_code"] = this.promo_code;
        return data; 
    }
}

export interface IProfile {
    /** First name of the Uber user. */
    first_name: string | undefined;
    /** Last name of the Uber user. */
    last_name: string | undefined;
    /** Email address of the Uber user */
    email: string | undefined;
    /** Image URL of the Uber user. */
    picture: string | undefined;
    /** Promo code of the Uber user. */
    promo_code: string | undefined;
}

export class Activity implements IActivity {
    /** Unique identifier for the activity */
    uuid: string | undefined;

    constructor(data?: IActivity) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.uuid = data["uuid"];
        }
    }

    static fromJS(data: any): Activity {
        let result = new Activity();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["uuid"] = this.uuid;
        return data; 
    }
}

export interface IActivity {
    /** Unique identifier for the activity */
    uuid: string | undefined;
}

export class Activities implements IActivities {
    /** Position in pagination. */
    offset: number | undefined;
    /** Number of items to retrieve (100 max). */
    limit: number | undefined;
    /** Total number of items available. */
    count: number | undefined;
    history: Activity[] | undefined;

    constructor(data?: IActivities) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.offset = data["offset"];
            this.limit = data["limit"];
            this.count = data["count"];
            if (data["history"] && data["history"].constructor === Array) {
                this.history = [];
                for (let item of data["history"])
                    this.history.push(Activity.fromJS(item));
            }
        }
    }

    static fromJS(data: any): Activities {
        let result = new Activities();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["offset"] = this.offset;
        data["limit"] = this.limit;
        data["count"] = this.count;
        if (this.history && this.history.constructor === Array) {
            data["history"] = [];
            for (let item of this.history)
                data["history"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IActivities {
    /** Position in pagination. */
    offset: number | undefined;
    /** Number of items to retrieve (100 max). */
    limit: number | undefined;
    /** Total number of items available. */
    count: number | undefined;
    history: Activity[] | undefined;
}

export class ErrorDto implements IErrorDto {
    code: number | undefined;
    message: string | undefined;
    fields: string | undefined;

    constructor(data?: IErrorDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.code = data["code"];
            this.message = data["message"];
            this.fields = data["fields"];
        }
    }

    static fromJS(data: any): ErrorDto {
        let result = new ErrorDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["code"] = this.code;
        data["message"] = this.message;
        data["fields"] = this.fields;
        return data; 
    }
}

export interface IErrorDto {
    code: number | undefined;
    message: string | undefined;
    fields: string | undefined;
}

