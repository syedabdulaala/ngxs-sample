import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GetProcedure, UpdateElement, UpdateSection, UpdateStep, UpdateProcedure } from './app.action';
import { Procedure, NormalizedProcedure } from './app.interface';

@State<NormalizedProcedure>({
    name: 'appState'
})
export class AppState {
    @Selector()
    static procedure(state: NormalizedProcedure) {
        return state.procedure;
    }

    @Selector()
    static section(state: NormalizedProcedure) {
        return state.section;
    }

    @Selector()
    static step(state: NormalizedProcedure) {
        return state.step;
    }

    @Selector()
    static element(state: NormalizedProcedure) {
        return state.element;
    }

    @Action(GetProcedure)
    getProcedure(ctx: StateContext<NormalizedProcedure>) {
        ctx.setState({
            procedure: {
                id: 1,
                text: 'This is procedure'
            },
            section: {
                id: 1,
                procedureId: 1,
                text: 'This is section'
            },
            step: {
                id: 1,
                sectionId: 1,
                text: 'This is step'
            },
            element: {
                id: 1,
                stepId: 1,
                text: 'This is procedure'
            }
        });
    }


    @Action(UpdateProcedure)
    updateProcedure(ctx: StateContext<NormalizedProcedure>) {
        const state = ctx.getState();
        ctx.patchState({
            procedure: {
                ...state.procedure,
                text: 'This is changed procedure'
            }
        });
    }

    @Action(UpdateSection)
    updateSection(ctx: StateContext<NormalizedProcedure>) {
        const state = ctx.getState();
        ctx.patchState({
            section: {
                ...state.section,
                text: 'This is changed section'
            }
        });
    }

    @Action(UpdateStep)
    updateStep(ctx: StateContext<NormalizedProcedure>) {
        const state = ctx.getState();
        ctx.patchState({
            step: {
                ...state.step,
                text: 'This is changed step'
            }
        });
    }

    @Action(UpdateElement)
    updateElement(ctx: StateContext<NormalizedProcedure>) {
        const state = ctx.getState();
        ctx.patchState({
            element: {
                ...state.element,
                text: 'This is changed element'
            }
        });
    }
}
