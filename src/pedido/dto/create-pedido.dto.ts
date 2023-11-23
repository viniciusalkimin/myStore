import { Type } from "class-transformer";
import { ValidateNested, IsArray, ArrayMinSize, IsInt, IsUUID } from "class-validator";

class ItemPedidoDTO {
    @IsUUID()
    produtoId: string;
    @IsInt()
    quantidade: number;
  }


export class CreatePedidoDto {
    @ValidateNested()
    @IsArray()
    @ArrayMinSize(1)
    @Type(() => ItemPedidoDTO)
    itensPedido: ItemPedidoDTO[];
}
