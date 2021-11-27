package rmit.rmitsb.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rmit.rmitsb.model.Category;
import rmit.rmitsb.repository.CategoryRepository;
import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public void saveCategory(Category category){
        this.categoryRepository.save(category);
    }

    public List<Category> getAllCategory(){
        return this.categoryRepository.findAll();
    }

    public Category getCategory(Long id){
        Category category = null;
        try {
            category = this.categoryRepository.findById(id)
                    .orElseThrow(() -> new Exception("Category not found for this id :: " + id));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return category;
    }

    public List<Category> searchForCategories (String infix) {
        return  categoryRepository.findCategoriesByNameContaining(infix);
    }

    public Category deleteCategory(Long id){
        Category category = getCategory(id);
        this.categoryRepository.delete(category);
        return category;
    }

    @Transactional
    public void updateCategory (Category category) {
        Category queryCategory = categoryRepository.findById(category.getId()).orElseThrow(() -> new IllegalStateException(
                "Category with id " + category.getId() + " does not exist"
        ));

        if (isUpdatable(category.getName())) {
            queryCategory.setName(category.getName());
        }
    }

    private boolean isUpdatable(String para) {
        return para != null && para.length() > 0;
    }
}