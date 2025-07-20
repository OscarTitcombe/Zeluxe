declare module 'react-simple-maps' {
  import { ReactNode } from 'react'
  
  export interface ComposableMapProps {
    projection?: string
    projectionConfig?: any
    style?: any
    children: ReactNode
  }
  
  export interface GeographiesProps {
    geography: string
    children: (props: { geographies: any[] }) => ReactNode
  }
  
  export interface GeographyProps {
    geography: any
    fill?: string
    stroke?: string
    strokeWidth?: number
    style?: any
    key?: string
  }
  
  export const ComposableMap: React.FC<ComposableMapProps>
  export const Geographies: React.FC<GeographiesProps>
  export const Geography: React.FC<GeographyProps>
} 