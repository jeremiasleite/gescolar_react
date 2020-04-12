import { action } from 'typesafe-actions';
import { RepositoriesTypes, Repository } from './types';

export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST);

export const loadSuccess = (data: Repository[]) => action(RepositoriesTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE);

export const addItem = (item: Repository) => action(RepositoriesTypes.ADD_ITEM, {item});