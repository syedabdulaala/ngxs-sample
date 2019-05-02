import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GetProcedure, UpdateElement, UpdateSection, UpdateStep, UpdateProcedure } from './app.action';
import { Procedure } from './app.interface';

@State<Procedure>({
    name: 'appState'
})
export class AppState {
    @Selector()
    static procedure(state: Procedure) {
        return state;
    }

    @Selector()
    static section(state: Procedure) {
        return state.section;
    }

    @Selector()
    static step(state: Procedure) {
        return state.section.step;
    }

    @Selector()
    static element(state: Procedure) {
        return state.section.step.element;
    }

    @Action(GetProcedure)
    getProcedure(ctx: StateContext<Procedure>) {
        ctx.setState({
            id: 1,
            text: 'This is procedure',
            section: {
                id: 1,
                text: 'This is section',
                step: {
                    id: 1,
                    text: 'This is step',
                    element: {
                        id: 1,
                        text: 'This is element'
                    }
                }
            }
        });
    }


    @Action(UpdateProcedure)
    updateProcedure(ctx: StateContext<Procedure>) {
        const state = ctx.getState();
        ctx.patchState({
            ...state,
            text: 'This is changed procedure'
        });
    }

    @Action(UpdateSection)
    updateSection(ctx: StateContext<Procedure>) {
        const state = ctx.getState();
        ctx.patchState({
            section: {
                ...state.section,
                text: 'This is changed section'
            }
        });
    }

    @Action(UpdateStep)
    updateStep(ctx: StateContext<Procedure>) {
        const state = ctx.getState();
        ctx.patchState({
            ...state,
            section: {
                ...state.section,
                step: {
                    ...state.section.step,
                    text: 'This is changed step'
                }
            }
        });
    }

    @Action(UpdateElement)
    updateElement(ctx: StateContext<Procedure>) {
        const state = ctx.getState();
        ctx.patchState({
            ...state,
            section: {
                ...state.section,
                step: {
                    ...state.section.step,
                    element: {
                        ...state.section.step.element,
                        text: 'This is changed element'
                    }
                }
            }
        });
    }
}
