package rmit.rmitsb.contrller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rmit.rmitsb.model.Product;
import rmit.rmitsb.service.ProductService;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductController {

    @Autowired
    private ProductService productService;

    @RequestMapping(path = "/products", method = RequestMethod.GET)
    public List<Product> getAllProduct(){
        return productService.getAllProduct();
    }

    @RequestMapping( path = "/products/infix/{infix}", method = RequestMethod.GET)
    public List<Product> searchProduct(@PathVariable(value="infix") String infix){
        return productService.searchForProducts(infix);
    }

    @RequestMapping(path = "/products", method = RequestMethod.POST)
    public void addProduct(@RequestBody Product product){
        productService.saveProduct(product);
    }

    @RequestMapping(path = "/products/{id}", method = RequestMethod.DELETE)
    public void deleteProduct(@PathVariable(value = "id") Long id){
        productService.deleteProduct(id);
    }

    @RequestMapping(path = "/products", method = RequestMethod.PUT)
    public void updateProduct(@RequestBody Product product){
        productService.updateProduct(product);
    }
}