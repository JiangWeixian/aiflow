/**
 * @description Remove the -page suffix from a page name
 */
export const convertPageToAction = (page: string) => {
  return page.replace('-page', '')
}
