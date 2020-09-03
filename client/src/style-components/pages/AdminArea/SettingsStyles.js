import styled from "styled-components";

export const SettingsSection = styled.section``;

export const EditAdminSection = styled.section``;

export const EditAdminLabel = styled.label`
  font-size: 2.5rem;
  font-weight: 700;
  display: block;

  margin: ${(props) => {
    return props.margin;
  }};
`;

export const EditAdminInput = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 2.5rem;
  font-weight: 600;
`;

export const AddBlogCategoriesSection = styled.section``;

export const AddBlogCategoryForm = styled.form``;

export const AddBlogCategoryLabel = styled.label`
  font-size: 2.5rem;
  font-weight: 700;
  display: block;

  margin: ${(props) => {
    return props.margin;
  }};
`;

export const AddBlogCategoryInput = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 2.5rem;
  font-weight: 600;
`;

export const BlogCategories = styled.div`
width: 100%;
display: grid;
gap: 0.5rem;
justify-items: baseline;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
margin: ${props => {
  return props.margin
}};
`;