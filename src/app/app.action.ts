export class GetProcedure {
    static readonly type = '[App] GetProcedure';
}

export class UpdateProcedure {
    static readonly type = '[App] UpdateProcedure';
}

export class UpdateSection {
    static readonly type = '[App] UpdateSection';
    constructor(public index: number) { }
}

export class UpdateStep {
    static readonly type = '[App] UpdateStep';
}

export class UpdateElement {
    static readonly type = '[App] UpdateElement';
}
