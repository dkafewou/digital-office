const modifyPath = (path: string, toReplace: string, replaceWith: string) => {
  return path.replace(toReplace, replaceWith)
}

const routes = {
  HOME:            "/",
  OFFICE_VIEWER_ROUTE: "/office",
  modifyPath,
}

export default routes
