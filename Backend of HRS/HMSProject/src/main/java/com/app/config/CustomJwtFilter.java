//package com.app.config;
//
//import java.io.IOException;
//
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.stereotype.Component;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import lombok.extern.slf4j.Slf4j;
//
//@Component
//@Slf4j
//public class CustomJwtFilter extends OncePerRequestFilter {
//
//	@Autowired
//	private JwtUtil utils;
//	
//	@Autowired
//	private UserDetailsService userDetailsService;
//	
//	@Override
//	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
//			throws ServletException, IOException {
//		log.info("in once per request filter");
//
//		String header = request.getHeader("Authorization");
//		if (header != null && header.startsWith("Bearer ")) {
//
//			String token = header.substring(7);
//			if (utils.validateJwtToken(token)) {
//
//				String userName = utils.getUserNameFromJwtToken(token);
//
//				if (userName != null && SecurityContextHolder.getContext().getAuthentication() == null) {
//					UserDetails userDetails = userDetailsService.loadUserByUsername(userName);
//					UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
//							userDetails.getUsername(), userDetails.getPassword(), userDetails.getAuthorities());
//
//					SecurityContextHolder.getContext().setAuthentication(authentication);
//				} else log.info("user name null or authentication already set , username {}", userName);
//			}
//		} else log.error("Request header DOES NOT contain a Bearer Token");
//
//		filterChain.doFilter(request, response);
//		
//	}
//
//}
