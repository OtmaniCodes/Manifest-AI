<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pedia_tools', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('image');
            $table->string('tool_link');
            $table->enum('version_state', ['Premium', 'Fremium', 'Free Trial'])->default('Fremium');
            $table->enum('status', ['PUBLISHED', 'DRAFT', 'PENDING'])->default('DRAFT');
            $table->text('description');
            $table->boolean('is_popular')->default(0);
            $table->boolean('manifest_collection')->default(0);
            $table->unsignedBigInteger('category_id'); // Foreign key column
            $table->timestamps();

            $table->foreign('category_id')
                ->references('id')
                ->on('pedia_categories')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pedia_tools');
    }
};
