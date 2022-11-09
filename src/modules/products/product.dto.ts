import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

class ProductDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    characteristics: string;

    @IsString()
    @IsNotEmpty()
    points: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsOptional()
    images?: string[];
}

export default ProductDto;