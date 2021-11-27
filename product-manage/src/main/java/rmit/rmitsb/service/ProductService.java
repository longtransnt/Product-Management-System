package rmit.rmitsb.service;
import rmit.rmitsb.model.Product;
import java.util.List;

public interface ProductService {
    public void saveProduct(Product product);
    public List<Product> getAllProduct();
    public Product getProduct(Long id);
    public Product deleteProduct(Long id);
    public List<Product> searchForProducts(String infix);
    public void updateProduct (Product product);
}
