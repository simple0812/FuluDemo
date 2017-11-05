export const ADD_WEBSITE = 'ADD_WEBSITE';
export const EDIT_WEBSITE = 'EDIT_WEBSITE';
export const DELETE_WEBSITES = 'DELETE_WEBSITES';
export const PAGE_WEBSITE = 'PAGE_WEBSITE';
export const PAGE_WEBSITE_SUCCESS = 'PAGE_WEBSITE_SUCCESS';
export const EDIT_WEBSITE_SUCCESS = 'EDIT_WEBSITE_SUCCESS';
export const ADD_WEBSITE_SUCCESS = 'ADD_WEBSITE_SUCCESS';
export const DELETE_WEBSITES_SUCCESS = 'DELETE_WEBSITES_SUCCESS';
export const PAGE_WEBSITE_ERROR = 'PAGE_WEBSITE_ERROR';
EDIT_WEBSITE_SUCCESS
export function addWebsite(website) {
  return {
    type: ADD_WEBSITE,
    entity: website,
  };
}

export function editWebsite(website) {
  return {
    type: EDIT_WEBSITE,
    entity: website,
  };
}

export function deleteWebsites(ids) {
  return {
    type: DELETE_WEBSITES,
    ids:ids || [],
  };
}

export function pageWebsite(filter) {
  return {
    type: PAGE_WEBSITE,
    filter : filter || {},
  };
}

export function pageWebsiteSuccess(data) {
  return {
    type: PAGE_WEBSITE_SUCCESS,
    data:data,
  };
}

export function pageWebsiteError(data) {
  return {
    type: PAGE_WEBSITE_Error,
    data,
  };
}

export function addWebsiteSuccess(website) {
  return {
    type: ADD_WEBSITE_SUCCESS,
    data: website,
  };
}

export function editWebsiteSuccess(website) {
  return {
    type: EDIT_WEBSITE_SUCCESS,
    data: website,
  };
}

export function deleteWebsitesSuccess(ids) {
  return {
    type: DELETE_WEBSITES_SUCCESS,
    data: ids,
  };
}


