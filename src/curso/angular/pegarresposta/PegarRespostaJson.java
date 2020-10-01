package curso.angular.pegarresposta;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

@WebServlet("/pessoas/")
public class PegarRespostaJson extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
	
	public PegarRespostaJson() {
		super();
	}

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("application/json");
		response.setHeader("Cache-Control", "nocache");
		response.setCharacterEncoding("utf-8");
		//IMPRIMIR NO CONSOLE O COD INFORMADO
		System.out.println(request.getParameter("codPessoa"));
		
		JSONArray jsonArray = new JSONArray();//RETORNA TODOS NA LISTA
					
		JSONObject jsonObject = new JSONObject();
		//jsonObject.put("codPessoa", request.getParameter("codPessoa"));
		jsonObject.put("codPessoa", 60);
		jsonObject.put("nome", "anailson");
		jsonObject.put("cidade", "samambaia");
			
		jsonArray.put(jsonObject);//RETORNA OS OBJETOS EM UMA LISTA ARRAY
				
		jsonObject  = new JSONObject();
		jsonObject.put("codPessoa", 90);
		jsonObject.put("nome", "ribeiro");
		jsonObject.put("cidade", "brasilia");
		
		jsonArray.put(jsonObject);
		
		//response.getWriter().write(jsonObject.toString());
		response.getWriter().write(jsonArray.toString());
			
	}
	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}
	
}
