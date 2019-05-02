import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GetProcedure, UpdateElement, UpdateSection } from './app.action';
import { Procedure } from './app.interface';

@State<Procedure>({
    name: 'appState'
})
export class AppState {
    @Selector()
    static model(state: Procedure) {
        return state;
    }

    @Action(GetProcedure)
    getProcedure(ctx: StateContext<Procedure>) {
        ctx.setState({
            id: 1,
            text: 'This is procedure.',
            section: {
                id: 1,
                text: 'This is section.',
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
                        id: 1,
                        text: 'This is new element'
                    }
                }
            }
        });
    }

    @Action(UpdateSection)
    updateSection(ctx: StateContext<Procedure>) {
        const state = ctx.getState();
        ctx.patchState({
            ...state,
            section: {
                ...state.section,
                text: 'This is new section'
            }
        });
    }
}
