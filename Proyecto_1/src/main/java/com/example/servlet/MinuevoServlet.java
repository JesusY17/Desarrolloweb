package com.example.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.security.sasl.SaslException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/nuevo-servlet")
public class MinuevoServlet extends HttpServlet{

	private static final long serialVersionUID = 1L;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws SaslException, IOException {
		
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		out.println("<h1>Hola, somos el grupo numero 3, este es nuestro primer servlet</h1>");
		
		
	}
	
}
