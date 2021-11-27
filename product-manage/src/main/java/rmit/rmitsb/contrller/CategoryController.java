package rmit.rmitsb.contrller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rmit.rmitsb.model.Category;
import rmit.rmitsb.service.CategoryService;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @RequestMapping(path = "/categories", method = RequestMethod.GET)
    public List<Category> getAllCategory (){
        return categoryService.getAllCategory();
    }

    @RequestMapping(path = "/categories", method = RequestMethod.POST)
    public void addCategory (@RequestBody Category category){
        categoryService.saveCategory(category);
    }

    @RequestMapping(path = "/categories", method = RequestMethod.PUT)
    public void updateCategory (@RequestBody Category category){
        categoryService.updateCategory(category);
    }

    @RequestMapping(path = "/categories/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public void deleteCategory (@PathVariable(value = "id") Long id){
        categoryService.deleteCategory(id);
    }

    @RequestMapping(path = "/categories/{id}", method = RequestMethod.GET)
    public Category getCategory (@PathVariable(value = "id") Long id){
        return categoryService.getCategory(id);
    }

    @RequestMapping( path = "/categories/infix/{infix}", method = RequestMethod.GET)
    public List<Category> searchForCategories(@PathVariable(value="infix") String infix){
        return categoryService.searchForCategories(infix);
    }
}
