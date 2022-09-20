function pagination(productListResult, limit = 2) {
  const maxPage = Math.round(productListResult.length / limit);
  const pages = [];

  for (let pageNum = 0; pageNum < maxPage; pageNum++) {
    let startIndex = pageNum * limit;
    let endIndex = (pageNum + 1) * limit;

    let page = productListResult.slice(startIndex, endIndex);

    pages.push(page);
  }

  const pagesObj = {
    maxPage,
    pages,
  };

  return pagesObj;
}

export default pagination;
