terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}


# Create a VPC
resource "aws_vpc" "vpc-prod-sa-east-1-autonome" {
  cidr_block = "10.0.0.0/16"
}

## subnet publica sa-east-1a
resource "aws_subnet" "prod-public_subnet-sa-east-1" {
  vpc_id            = aws_vpc.vpc-prod-sa-east-1-autonome.id
  cidr_block        = "10.0.1.0/24"
  availability_zone = "sa-east-1a"
  map_public_ip_on_launch = true 

  tags = {
    Name = "subnet-prod-sa-east-1-public"
  }
}

# internet gateway
resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.vpc-prod-sa-east-1-autonome.id

  tags = {
    Name = "igw-prod-sa-east-1"
  }
}

# route table
resource "aws_route_table" "public_rt" {
  vpc_id = aws_vpc.vpc-prod-sa-east-1-autonome.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.igw.id
  }

  tags = {
    Name = "rt-prod-sa-east-1-public"
  }
}

# associação subnet e route table publica 
resource "aws_route_table_association" "public_assoc" {
  subnet_id      = aws_subnet.prod-public_subnet-sa-east-1.id
  route_table_id = aws_route_table.public_rt.id
}


# Criando segunda subnet
resource "aws_subnet" "prod-private_subnet-sa-east-1" {
  vpc_id            = aws_vpc.vpc-prod-sa-east-1-autonome.id
  cidr_block        = "10.0.2.0/24"
  availability_zone = "sa-east-1a"

  tags = {
    Name = "subnet-prod-sa-east-1a-private"
  }
}

#criando route table privada
resource "aws_route_table" "private_rt" {
  vpc_id = aws_vpc.vpc-prod-sa-east-1-autonome.id

  tags = {
    Name = "rt-prod-sa-east-1-private"
  }
}

# associando subnet privada com route table privada
resource "aws_route_table_association" "private_assoc" {
  subnet_id      = aws_subnet.prod-private_subnet-sa-east-1.id
  route_table_id = aws_route_table.private_rt.id
}

