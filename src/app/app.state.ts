import { State, Action, StateContext, Selector, UpdateState } from '@ngxs/store';
import { updateItem, patch } from '@ngxs/store/operators';
import { GetProcedure, UpdateElement, UpdateSection, UpdateStep, UpdateProcedure } from './app.action';
import { NormalizedProcedure, Section } from './app.interface';

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
            section: [
                {
                    id: 1,
                    procedureId: 1,
                    text: 'This is section 1'
                },
                {
                    id: 2,
                    procedureId: 1,
                    text: 'This is section 2'
                },
                {
                    id: 3,
                    procedureId: 1,
                    text: 'This is section 3'
                }
            ],
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
    updateSection(ctx: StateContext<NormalizedProcedure>, { index }: UpdateSection) {
        const state = ctx.getState();
        ctx.setState(
            patch({
                section: updateItem<Section>(index, patch({ text: `This is changed section ${index + 1}` }))
            })
        );
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
