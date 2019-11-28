import { ICommonProps } from '@redwallsolutions/common-interfaces-ts'

export type Variant = 'text' | 'contained'

export interface IButtonStyled extends ICommonProps {
    /**
     * The isLoading prop defines the loading state of the button.
     */
    isLoading?:boolean

    /**
     * The variant prop defines the pre-defined style of the button.
     */
    variant?:Variant

    /**
     * The shouldFitContainer prop defines if the component will fit the parent width.
     */
    shouldFitContainer?:boolean
}