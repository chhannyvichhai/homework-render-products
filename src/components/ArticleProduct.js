const ArticleProducts = ({ products }) => {
	return (
		<table class="table">
			<thead>
				<tr>
					<th scope="col">ID</th>
					<th scope="col">Image</th>
					<th scope="col">Title</th>
					<th scope="col">description</th>
					<th scope="col">Price</th>
				</tr>
			</thead>
			<tbody>
				{products.map((product) =>(
				<tr key={product.id}>
					<th scope="row">{product.id}</th>
					<td>
						<img src={product.images} width={100} alt=""/>
					</td>
					<td>{product.title}</td>
					<td>{product.description}</td>
					<td>${product.price}</td>
				</tr>
				))}
			</tbody>
		</table>
	);
};

export default ArticleProducts
