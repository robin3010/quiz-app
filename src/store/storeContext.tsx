import { createContext } from 'react'
import { IRootStoreNode } from './models/root'

const StoreContext = createContext({} as IRootStoreNode)

export default StoreContext
