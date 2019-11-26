import { ICommonProps } from '@redwallsolutions/common-interfaces-ts'

export type Variant = 'text' | 'contained'

export interface IButtonStyled extends ICommonProps {
    isLoading?:boolean
    variant?:Variant
    shouldFitContainer?:boolean
}