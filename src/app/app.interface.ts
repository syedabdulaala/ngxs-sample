export interface Procedure {
    id: number;
    text: string;
    section: Section;
}

export interface Section {
    id: number;
    text: string;
    step: Step;
}

export interface Step {
    id: number;
    text: string;
    element: Element;
}

export interface Element {
    id: number;
    text: string;
}
