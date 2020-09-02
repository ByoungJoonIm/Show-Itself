package bjdev.ShowItSelf;

import java.util.Objects;
import java.util.StringTokenizer;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class TechnologyCard {
	private @Id @GeneratedValue Long id;
	private String name;
	private String description;
	private @JsonIgnore String iconName;
	private @JsonIgnore String docTitleName;
	
	private TechnologyCard() {}
	
	public TechnologyCard(String name, String iconName, String description) {
		this.name = name;
		this.description = description;

		StringBuilder iconSb = new StringBuilder();
		StringBuilder docSb = new StringBuilder();
		StringTokenizer st = new StringTokenizer(iconName.toLowerCase());
		
		docSb.append('#');
		
		while(st.hasMoreTokens()) {
			String cur = st.nextToken();
			iconSb.append(cur);
			docSb.append('_').append(cur);
		}
			
		this.iconName = iconSb.toString();
		this.docTitleName = docSb.toString();
	}
	
	@Override
	public boolean equals(Object o) {
		if(this == o)
			return true;
		if(o == null || getClass() != o.getClass())
			return false;
		TechnologyCard technologyCard = (TechnologyCard) o;
		return Objects.equals(id, technologyCard.id) &&
				Objects.equals(name, technologyCard.name) &&
				Objects.equals(description, technologyCard.description) &&
				Objects.deepEquals(iconName, technologyCard.iconName);
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(id, name, description, iconName);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getIconName() {
		return iconName;
	}

	public void setIconName(String iconName) {
		this.iconName = iconName;
	}

	public String getDocTitleName() {
		return docTitleName;
	}

	public void setDocTitleName(String docTitleName) {
		this.docTitleName = docTitleName;
	}

	@Override
	public String toString() {
		return "TechnologyCard [id=" + id + ", name=" + name + ", description=" + description + ", iconName=" + iconName
				+ "]";
	}
}