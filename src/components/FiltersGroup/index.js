import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const renderRatingsList = () => {
    const {ratingsList} = props
    return ratingsList.map(rating => {
      const {changeRating, activeRatingId} = props
      const onClickRatingItem = () => changeRating(rating.ratingId)

      const ratingClsName =
        activeRatingId === rating.ratingId ? 'and-up active-rating' : 'and-up'

      return (
        <li
          key={rating.ratingId}
          onClick={onClickRatingItem}
          className="list-rating"
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="stars"
          />
          <p className={ratingClsName}>$up</p>
        </li>
      )
    })
  }

  const renderRatingsFilters = () => (
    <div>
      <h1 className="rating-name">rating</h1>
      <ul>{renderRatingsList()}</ul>
    </div>
  )

  const renderCategoryList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(category => {
      const {activeCategoryId, changeCategory} = props
      const onClickCategoryItem = () => changeCategory(category.categoryId)
      const isActive = category.categoryId === activeCategoryId
      const categoryClsName = isActive
        ? 'category-name active-category-name'
        : 'category-name'

      return (
        <li
          key={category.categoryId}
          onClick={onClickCategoryItem}
          className="category-list"
        >
          <p className={categoryClsName}>{category.name}</p>
        </li>
      )
    })
  }

  const renderProductCategory = () => (
    <>
      <h1 className="category-head">Category</h1>
      <ul>{renderCategoryList()}</ul>
    </>
  )

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onchangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props

    return (
      <div className="search-container">
        <input
          value={searchInput}
          type="search"
          placeholder="Search"
          className="search"
          onChange={onchangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch />
      </div>
    )
  }

  const {clearFilters} = props

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductCategory()}
      {renderRatingsFilters()}
      <button type="button" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}
export default FiltersGroup
