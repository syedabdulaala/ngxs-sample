export interface Procedure {
    id: number;
    text: string;
}

export interface Section {
    id: number;
    procedureId: number;
    text: string;
}

export interface Step {
    id: number;
    sectionId: number;
    text: string;
}

export interface Element {
    id: number;
    stepId: number;
    text: string;
}

export interface NormalizedProcedure {
    procedure: Procedure;
    section: Section[];
    step: Step;
    element: Element;
}
