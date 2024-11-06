# Use the official PHP image with Apache
FROM php:8.0-apache

# Copy the current directory contents into the container at /var/www/html
COPY . /var/www/html

# Expose port 80 to the outside
EXPOSE 80

# Set permissions for the web server
RUN chown -R www-data:www-data /var/www/html

# Install any PHP extensions you might need
# For example, for MySQL support, install the pdo_mysql extension
RUN docker-php-ext-install pdo_mysql
