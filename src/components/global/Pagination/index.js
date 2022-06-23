import './Pagination.scss';

export const Pagination = ({bullets}) => {
	return (
		<div className="pagination">
			<ul>
				{bullets}
			</ul>
		</div>
	)
}
