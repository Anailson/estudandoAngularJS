package curso.angular.pegarresposta;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

@WebServlet("/pegarRespostaJson")
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
		
		JSONArray jsonArray = new JSONArray();
		
		JSONObject joObject = new JSONObject();
		joObject.put("nome", "anailson");
		joObject.put("cidade", "samambaia");
		jsonArray.put(joObject);
		
		joObject = new JSONObject();
		
		joObject.put("nome", "analista");
		joObject.put("cidade", "brasilia");
		jsonArray.put(joObject);
		
		joObject = new JSONObject();
		
		joObject.put("nome", "java");
		joObject.put("cidade", "holanda");
		jsonArray.put(joObject);
		
		response.getWriter().write(jsonArray.toString());
			
	}
	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}
	
}
