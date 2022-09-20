package com.book.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.book.entity.Books;
import com.book.enums.Category;

public interface IBookRepository extends JpaRepository<Books, Integer>{
	
	
	@Query(value = "SELECT * FROM books.books WHERE email=?1", nativeQuery = true)
	public List<Books> findByemail(String email);
	
	@Query(value = "SELECT * FROM books.books WHERE category=?1 AND authorName=?2 AND publisher=?3 AND price=?4", nativeQuery = true)
	public List<Books> findByCategoryAuthorNamePublisherPrice(String category,String authorName,Long price,String publisher);
	
	

}
