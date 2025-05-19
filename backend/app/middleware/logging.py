import time
import logging
from typing import Callable
from fastapi import Request, Response
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.types import ASGIApp

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

class LoggingMiddleware(BaseHTTPMiddleware):
    def __init__(self, app: ASGIApp):
        super().__init__(app)
        self.logger = logger

    async def dispatch(self, request: Request, call_next: Callable) -> Response:
        # Request logging
        request_id = request.headers.get("X-Request-ID", "N/A")
        client_host = request.client.host if request.client else "N/A"
        
        self.logger.info(
            f"Request started - ID: {request_id} | "
            f"Method: {request.method} | "
            f"URL: {request.url} | "
            f"Client: {client_host}"
        )

        try:
            # Process request
            start_time = time.time()
            response = await call_next(request)
            process_time = time.time() - start_time

            # Response logging
            self.logger.info(
                f"Request completed - ID: {request_id} | "
                f"Status: {response.status_code} | "
                f"Time: {process_time:.2f}s"
            )

            return response

        except Exception as e:
            process_time = time.time() - start_time
            self.logger.error(
                f"Request failed - ID: {request_id} | "
                f"Error: {str(e)} | "
                f"Time: {process_time:.2f}s"
            )
            raise 