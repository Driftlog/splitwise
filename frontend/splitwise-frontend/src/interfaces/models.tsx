
export interface cardInfo {
    title: string,
    description: string,
    img: string
}

export interface reviewInfo {
    review:string,
    reviewerPic?: string,
    reviewer:string
}

declare global { 
    interface Window {
        google: any
    }
}

export interface signUp {
    name:string,
    email:string,
    password:string
}