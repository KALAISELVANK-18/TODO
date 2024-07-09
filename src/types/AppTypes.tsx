
import { StackNavigationProp} from "@react-navigation/stack";
import { RouteProp } from '@react-navigation/native';


export type RootStackParamList = {
    Home: undefined;
    TodoForm: undefined;
    EditForm :{index:number};
    TodoTab: {type:string}
  };

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;


type TodoTabProp = StackNavigationProp<
  RootStackParamList,
  'TodoTab'
>;

type TodoFormScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "TodoForm"
>;

type EditTodoFormScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "EditForm"
>;

export type TodoFormNavigationProps = {
  navigation: TodoFormScreenNavigationProp;
};



export type HomeNavigationProps = {
    navigation: HomeScreenNavigationProp;
    
  };


type EditFormScreenRouteProp = RouteProp<RootStackParamList, 'EditForm'>;

type TodoTabRouteProp = RouteProp<RootStackParamList, 'TodoTab'>;

export type EditTodoFormNavigationProps = {
    navigation: EditTodoFormScreenNavigationProp;
    route:EditFormScreenRouteProp;
}

export type TodoTabProps = {
  navigation: TodoTabProp;
  route:TodoTabRouteProp;
}
