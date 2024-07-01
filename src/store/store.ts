import quizData from 'templates/quizData'
import { IRootStoreNode, RootStoreModel } from './models/root'

const CreateStore = (): IRootStoreNode => RootStoreModel.create(quizData)

export default CreateStore
