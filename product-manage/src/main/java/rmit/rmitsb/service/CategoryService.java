package rmit.rmitsb.service;
import rmit.rmitsb.model.Category;
import java.util.List;

public interface CategoryService {
    public void saveCategory(Category category);
    public List<Category> getAllCategory();
    public Category getCategory(Long id);
    public Category deleteCategory(Long id);
    public List<Category> searchForCategories(String infix);
    public void updateCategory (Category category);
}
