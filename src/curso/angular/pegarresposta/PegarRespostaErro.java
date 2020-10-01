package curso.angular.pegarresposta;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/pegarRespostaErro")
public class PegarRespostaErro  extends HttpServlet {

	private static final long serialVersionUID = 1L;
	
	public PegarRespostaErro() {
		super();
	}
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		int numero = Integer.parseInt("a"); //PASSANDO UM NUMERO PARA STRING CAUSANDO ERRO
	}

	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}
}
