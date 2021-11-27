package rmit.rmitsb.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rmit.rmitsb.model.Product;
import rmit.rmitsb.repository.ProductRepository;
import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    public void saveProduct(Product product){
        this.productRepository.save(product);
    }

    public List<Product> getAllProduct(){
        return this.productRepository.findAll();
    }

    public Product getProduct(Long id){
        Product product = null;
        try {
            product = this.productRepository.findById(id)
                    .orElseThrow(() -> new Exception("Product not found for this id :: " + id));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return product;
    }

    public List<Product> searchForProducts (String infix) {
        return  productRepository.findProductsByNameContaining(infix);
    }

    public Product deleteProduct(Long id){
        Product product = getProduct(id);
        this.productRepository.delete(product);
        return product;
    }

    @Transactional
    public void updateProduct (Product product) {
        Product queryProduct = productRepository.findById(product.getId()).orElseThrow(() -> new IllegalStateException(
                "product with id " + product.getId() + " does not exist"
        ));

        if (isUpdatable(product.getName())) {
            queryProduct.setName(product.getName());
        }

        if (isUpdatable(product.getCatID())) {
            queryProduct.setCatID(product.getCatID());
        }
    }

    private boolean isUpdatable(String para) {
        return para != null && para.length() > 0;
    }
}
