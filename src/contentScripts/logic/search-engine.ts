export const getSearchInputValue = () => {
  return (document.querySelector('input[name="q"]') as HTMLInputElement)?.value
}
