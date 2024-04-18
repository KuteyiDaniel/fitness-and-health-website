import exp from "constants"

export interface navigation {
    title: string,
    path: string,
    icon: any
}

export interface slideShow {
    text: string,
    mentionedBy: string
}

export interface categoryArray {
    category: string,
    image: string,
    details: string
}

export interface frequentlyAskedQuestions {
    question: string,
    answer: string
}

export interface testimonial {
    review: string,
    image: string
    name: string,
    profession: string,
    company: string,
    companyLink: string
}

export interface contactForm {
    label: string,
    placeholder: string,
    hasError: boolean,
    errorText: string,
    value: string,
    type: string,
    name: string,
    required?: boolean,
    fieldType: string
}

export interface Difficulty {
    level: string,
    path: string,
    
}

export interface categoryDifficulty {
    category: string,
    path: string,
    image?:string,
    icon?: any
}

export interface articleInformation {
    coverImagePath: string,
    articleCategory: string,
    articleTitle: string[],
    articlePreview: string,
    articleContent: string,
    id: number
    path: string
    articleContentPreview:string
    contentWriter?: string
    detailCoverImagePath?: string
}